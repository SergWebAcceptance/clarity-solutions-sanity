export default {
    name: 'legalPages',
    type: 'document',
    title: 'Legal pages',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Page title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Page slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
}