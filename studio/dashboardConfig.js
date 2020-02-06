export default {
  widgets: [
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
                  buildHookId: '5e3c6760ee2982019c0fc968',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-z32nnxrq',
                  apiId: 'ee26be52-a486-4a5a-9c96-b5ca03d2fdbc'
                },
                {
                  buildHookId: '5e3c6760c5205f01af1f6573',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-g81pixnq',
                  apiId: 'b794f9d1-fc82-46c3-93e5-e5c0324f15de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devbrock/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-g81pixnq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
