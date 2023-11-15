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
        ]
})