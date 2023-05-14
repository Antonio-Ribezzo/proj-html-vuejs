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
    ],

    cardInfoSectionFive:[
        {
            title:'High level of efficiency and scientific teaching methods',
            text:'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
            urlAvatar:'/img/artist-testimonial-avatar-04.jpg',
            nameAvatar:'Mina Hollace',
            roleAvatar:'/Freelancer'
        },
        {
            title:"It's a choice of quality for people with special needs",
            text:"I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
            urlAvatar:'/img/artist-testimonial-avatar-02.jpg',
            nameAvatar:'Florence Themes',
            roleAvatar:'/Multimedia Admin'
        },
        {
            title:'Professional team of specialists and passionate mentors at reach',
            text:'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
            urlAvatar:'/img/artist-testimonial-avatar-01.jpg',
            nameAvatar:'Madley Pondor',
            roleAvatar:'/IT Specialist'
        },
        // {
        //     title:'High level of efficiency and scientific teaching methods',
        //     text:'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
        //     urlAvatar:'/img/artist-testimonial-avatar-03.jpg',
        //     nameAvatar:'Thomas Wall',
        //     roleAvatar:'/Freelancer'
        // }
    ],

    counter:1

    
})