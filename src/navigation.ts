import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'), // Te llevará a index.astro
    },
   
    {
      text: 'Servicios',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getPermalink('/'),
    },
   
  
    {
      text: 'Webinars',
      href: getPermalink('/'),
    },
    {
      text: 'Tutoriales',
      href: getPermalink('/'),
    },
   
    
  ],
  actions: [{ text: 'Iniciar Sesión', href: '/', target: '_blank' }],
};



// export const headerData = {
//   links: [
//     {
//       text: 'Inicio',
//       links: [
//         {
//           text: 'Guía Legal',
//           href: getPermalink('/guides/legal'),
//         },
//         {
//           text: 'Servicios',
//           href: getPermalink('/services'),
//         },
//         {
//           text: 'Blog',
//           href: getBlogPermalink(),
//         },
//         {
//           text: 'Contáctanos',
//           href: getPermalink('/contact'),
//         },
//       ],
//     },
//     {
//       text: 'Recursos',
//       links: [
//         {
//           text: 'Artículos',
//           href: getPermalink('/articles'),
//         },
//         {
//           text: 'Preguntas Frecuentes',
//           href: getPermalink('/faq'),
//         },
//         {
//           text: 'Webinars',
//           href: getPermalink('/webinars'),
//         },
//         {
//           text: 'Tutoriales',
//           href: getPermalink('/tutorials'),
//         },
//       ],
//     },
//     {
//       text: 'Sobre nosotros',
//       links: [
//         {
//           text: 'Misión y Visión',
//           href: getPermalink('/mission-vision'),
//         },
//         {
//           text: 'Nuestro Equipo',
//           href: getPermalink('/team'),
//         },
//       ],
//     },
//   ],
//   actions: [{ text: 'Iniciar Sesión', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
// };

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Consultas Legales', href: '#' },
        { text: 'Asesoría Personalizada', href: '#' },
        { text: 'Testimonios', href: '#' },
        { text: 'Precios', href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'API para Desarrolladores', href: '#' },
        { text: 'Documentación', href: '#' },
        { text: 'Guías Legales', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Centro de Ayuda', href: '#' },
        { text: 'Foro Comunitario', href: '#' },
        { text: 'Servicios Profesionales', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Sobre Arxatec', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Carreras', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: '#' },
    { text: 'Política de Privacidad', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://arxatec.com/favicon/favicon-32x32.png" alt="Arxatec logo" loading="lazy"></img>
    Hecho por <a class="text-blue-600 underline dark:text-muted" href="#"> Arxatec</a> · Todos los derechos reservados.
  `,
};

