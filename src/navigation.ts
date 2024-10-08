import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      links: [
        {
          text: 'Guía Legal',
          href: getPermalink('/guides/legal'),
        },
        {
          text: 'Servicios',
          href: getPermalink('/services'),
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Contáctanos',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Recursos',
      links: [
        {
          text: 'Artículos',
          href: getPermalink('/articles'),
        },
        {
          text: 'Preguntas Frecuentes',
          href: getPermalink('/faq'),
        },
        {
          text: 'Webinars',
          href: getPermalink('/webinars'),
        },
        {
          text: 'Tutoriales',
          href: getPermalink('/tutorials'),
        },
      ],
    },
    {
      text: 'Sobre nosotros',
      links: [
        {
          text: 'Misión y Visión',
          href: getPermalink('/mission-vision'),
        },
        {
          text: 'Nuestro Equipo',
          href: getPermalink('/team'),
        },
      ],
    },
  ],
  actions: [{ text: 'Iniciar Sesión', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        { text: 'Características', href: getPermalink('/features') },
        { text: 'Seguridad', href: getPermalink('/security') },
        { text: 'Testimonios', href: getPermalink('/testimonials') },
        { text: 'Precios', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'API de Desarrollador', href: getPermalink('/developer-api') },
        { text: 'Documentación', href: getPermalink('/docs') },
        { text: 'Recursos Legales', href: getPermalink('/legal-resources') },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Ayuda', href: getPermalink('/help') },
        { text: 'Foro Comunitario', href: getPermalink('/forum') },
        { text: 'Servicios Profesionales', href: getPermalink('/professional-services') },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Sobre Nosotros', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Carreras', href: getPermalink('/careers') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Hecho por <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · Todos los derechos reservados.
  `,
};
