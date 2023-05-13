import {reactive} from 'vue'

export const store = reactive({

    navItem:[
        {
            name: 'Home',
            contents:[
                'section-1',
                'section-2',
                'section-3',
                'section-4'
            ]
        },
        {
            name: 'Pages',
            contents:[
                'section-1',
                'section-2',
                'section-3',
                'section-4'
            ]
        },
        {
            name: 'Courses',
            contents:[
                'section-1',
                'section-2',
                'section-3',
                'section-4'
            ]
        },
        {
            name: 'Features',
            contents:[
                'section-1',
                'section-2',
                'section-3',
                'section-4'
            ]
        },
        {
            name: 'Blog',
            contents:[
                'section-1',
                'section-2',
                'section-3',
                'section-4'
            ]
        },
        {
            name: 'Shop',
            contents:[
                'section-1',
                'section-2',
                'section-3',
                'section-4'
            ]
        }
    ],
    contactsInfo:{
        address: "382 NE 191st St # 87394 Miami, FL 22179-3899",
        numberCell: "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
        eMail: "support@maxcoach.com"
    },

    navFooterItem:[
        {
            name:'Explore',
            contents:[
                'Start here',
                'Success story',
                'Blog',
                'Courses',
                'Contact us'
            ]
        },
        {
            name:'Information',
            contents:[
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of services',
            ]
        }
    ]
    
})