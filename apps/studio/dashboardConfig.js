export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'jezi89/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e073f077789f2a56a4066c',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-7jsyu5qp',
                  apiId: 'eb88bd7c-9105-40c2-bf10-5c22432fb8c2'
                },
                {
                  buildHookId: '61e073f078358426e49e6405',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-t5tz2z1a',
                  apiId: 'b41bb145-7201-470a-8b24-13cfc8404b5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jezi89/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-t5tz2z1a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
