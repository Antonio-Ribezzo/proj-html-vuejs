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
    ],

    sectionTwoBox:[
        {
            urlImg:'/img/artist-box-image-01.png',
            title:'Online Course',
            text:'Online art coaching now offers you a very powerful way to redesign your artist mind.'
        },
        {
            urlImg:'/img/artist-box-image-02.png',
            title:'One to One',
            text:'Getting the necessary clarity about the current state to help you improve your ability.'
        },
        {
            urlImg:'/img/artist-box-image-03.png',
            title:'Anywhere',
            text:'Access to valuable and partable program which allow you to setup and live anywhere you want.'
        },
        {
            urlImg:'/img/artist-box-image-04.png',
            title:'On Time',
            text:"Puncuality is our top priority because it's an essential criteria to assess a program VideoPlaybackQuality."
        }
    ]

    
})