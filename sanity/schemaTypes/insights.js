export default {
    name: 'insights',
    type: 'document',
    title: 'Insights',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Post title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Post slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Post Image'
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
        },
        {
            name: 'seo_title',
            type: 'string',
            title: 'SEO title'
        },
        {
            name: 'seo_description',
            type: 'text',
            title: 'SEO title'
        },
    ]
}