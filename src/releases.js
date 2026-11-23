const API = 'https://api.github.com';
const TTL = 10 * 60 * 1000;

/** The part of a GitHub release the page shows: tag, name, date, prerelease, address. Drafts are never public, but are dropped anyway. */
export function parseReleases(json, limit = 5) {
  if (!Array.isArray(json)) return [];
  return json
    .filter((r) => r && !r.draft && typeof r.tag_name === 'string' && typeof r.html_url === 'string' && r.html_url.startsWith('https://github.com/'))
    .slice(0, limit)
    .map((r) => ({ tag: r.tag_name, name: r.name || r.tag_name, date: r.published_at ?? r.created_at ?? null, prerelease: Boolean(r.prerelease), url: r.html_url }));
}

/** The latest releases of a repository (`owner/name`): from the session's cache when recent, else from the public GitHub API. Throws when unreadable. */
export async function fetchReleases(repo, { fetchImpl = fetch, storage = null, now = Date.now(), limit = 5 } = {}) {
  const key = `flipova-releases:${repo}`;
  try {
    const hit = JSON.parse(storage?.getItem(key) ?? 'null');
    if (hit && now - hit.at < TTL) return hit.releases;
  } catch {
    /* an unreadable cache is no cache */
  }
  const response = await fetchImpl(`${API}/repos/${repo}/releases?per_page=${limit}`, { headers: { Accept: 'application/vnd.github+json' } });
  if (!response.ok) throw new Error(`GitHub answered ${response.status}`);
  const releases = parseReleases(await response.json(), limit);
  try {
    storage?.setItem(key, JSON.stringify({ at: now, releases }));
  } catch {
    /* not remembered */
  }
  return releases;
}
