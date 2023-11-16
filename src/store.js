import { reactive } from 'vue'

export const store = reactive({
    companyNumber: '1-800-555-555',
    navbarList: [
      { 
        name: 'home',
        newItem: false,
      },
      { 
        name: 'about',
        newItem: false,
      },
      { 
        name: 'prices',
        newItem: false,
      },
      { 
        name: 'courses',
        newItem: true,
      },
      { 
        name: 'locations',
        newItem: false,
      },
      { 
        name: 'blog',
        newItem: false,
      }
    ],
    footerContacts: [
      {
        icon: {
          type: 'solid',
          name: 'house-chimney',
        },
        detail: '12345 North Main Street, New York, NY 555555'  
      },
      {
        icon: {
          type: 'solid',
          name: 'phone-flip',
        },
        detail: '1.800.555.6789'  
      },
      {
        icon: {
          type: 'regular',
          name: 'envelope',
        },
        detail: 'info@your-domain.com'  
      },
      {
        icon: {
          type: 'solid',
          name: 'link',
        },
        detail: 'Theme-Fusion.com'  
      },
    ],
    coursesArray: ['Pass Plus', 'Intensive Course', 'Automatic', 'Instructor Training']
      
})