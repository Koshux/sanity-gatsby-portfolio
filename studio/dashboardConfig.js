export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e245ada1fec0681356afc36',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7dq1k3ok',
                  apiId: 'b7c48f93-c224-4efb-90b9-5935fb8ae7c1'
                },
                {
                  buildHookId: '5e245ada2f1507f3f16a99a9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rhwxsix7',
                  apiId: '8dd4333a-d1e5-4a00-8af8-7cdd2dd74df5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Koshux/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rhwxsix7.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
