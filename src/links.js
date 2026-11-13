import data from 'virtual:flipova-links';

export const { site, hero, projects, services } = data;
export const projectById = (id) => projects.find((project) => project.id === id);
