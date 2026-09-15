import Marquee from 'react-fast-marquee'

const breakingNews = () => {

const news=[
  {
    "id": 1,
    "title": "Bangladesh Eyes Stronger Digital Economy as Technology Sector Expands",
    "category": "Technology",
    "author": "Dragon News Desk",
    "date": "2026-09-16",
    "time": "10:30 AM",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "description": "Bangladesh is focusing on expanding its digital economy as technology startups, software development and digital services continue to grow across the country.",
    "details": "The technology sector is becoming an increasingly important part of Bangladesh's economy. Industry experts believe that investment in digital infrastructure, artificial intelligence and skilled human resources could accelerate future growth.",
    "tags": ["Bangladesh", "Technology", "Digital Economy"],
    "views": 12450
  },
  {
    "id": 2,
    "title": "AI Innovation Continues to Transform Businesses Worldwide",
    "category": "Technology",
    "author": "Tech News Desk",
    "date": "2026-09-16",
    "time": "09:45 AM",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    "description": "Artificial intelligence is rapidly changing how companies develop products, serve customers and automate everyday business operations.",
    "details": "Companies across multiple industries are increasing their investment in artificial intelligence. Experts say responsible AI development, data security and workforce training will remain important priorities.",
    "tags": ["AI", "Technology", "Business"],
    "views": 18920
  },
  {
    "id": 3,
    "title": "Bangladesh Cricket Team Begins Preparation for Upcoming Series",
    "category": "Sports",
    "author": "Sports Desk",
    "date": "2026-09-15",
    "time": "08:20 PM",
    "image": "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
    "description": "Bangladesh's cricket team has started preparations for its upcoming international series with players focusing on fitness and match strategy.",
    "details": "The coaching staff is working with the players on batting consistency, bowling discipline and fielding performance. The team management expects the preparation camp to help players build confidence ahead of the series.",
    "tags": ["Bangladesh", "Cricket", "Sports"],
    "views": 25430
  },
  {
    "id": 4,
    "title": "Global Markets Remain Focused on Economic Growth Outlook",
    "category": "Business",
    "author": "Business Desk",
    "date": "2026-09-15",
    "time": "06:10 PM",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    "description": "Investors around the world are closely watching economic growth, inflation and central bank policies as markets respond to changing global conditions.",
    "details": "Financial analysts say uncertainty around interest rates and international trade continues to influence investor sentiment. Businesses are also monitoring consumer demand and energy prices.",
    "tags": ["Business", "Economy", "Markets"],
    "views": 9870
  },
  {
    "id": 5,
    "title": "New Research Highlights the Importance of Clean Energy",
    "category": "Science",
    "author": "Science Desk",
    "date": "2026-09-15",
    "time": "03:30 PM",
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    "description": "Researchers continue to explore new technologies that could make renewable energy more affordable, efficient and accessible.",
    "details": "Solar, wind and energy-storage technologies are receiving increased attention from researchers and policymakers. Scientists believe improvements in battery technology could play a major role in the transition to cleaner energy.",
    "tags": ["Science", "Energy", "Environment"],
    "views": 7640
  },
  {
    "id": 6,
    "title": "Dhaka Sees Growing Interest in Smart City Technologies",
    "category": "Bangladesh",
    "author": "Dhaka Correspondent",
    "date": "2026-09-15",
    "time": "01:15 PM",
    "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    "description": "Smart transportation, digital public services and connected infrastructure are gaining attention as cities look for ways to improve urban life.",
    "details": "Urban technology experts say smart-city solutions could help improve traffic management, public safety and access to government services. Successful implementation will require strong infrastructure and long-term planning.",
    "tags": ["Dhaka", "Bangladesh", "Smart City"],
    "views": 11320
  },
  {
    "id": 7,
    "title": "Researchers Develop New Approach to Space Exploration",
    "category": "Science",
    "author": "World Science Desk",
    "date": "2026-09-14",
    "time": "11:40 AM",
    "image": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    "description": "Scientists are exploring new technologies that could improve the efficiency and safety of future space missions.",
    "details": "Research teams are studying advanced propulsion, autonomous navigation and lightweight materials for future spacecraft. The developments could help reduce mission costs and expand exploration capabilities.",
    "tags": ["Space", "Science", "Research"],
    "views": 8320
  },
  {
    "id": 8,
    "title": "Digital Education Platforms Expand Access to Learning",
    "category": "Education",
    "author": "Education Desk",
    "date": "2026-09-14",
    "time": "09:00 AM",
    "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    "description": "Online education platforms are continuing to expand access to learning resources for students around the world.",
    "details": "Digital classrooms, interactive learning tools and AI-powered educational assistants are becoming increasingly common. Educators say technology can complement traditional teaching when used effectively.",
    "tags": ["Education", "Technology", "Learning"],
    "views": 6540
  }
];


  return (
    <div className='flex gap-2 mx-auto w-[80%] bg-gray-300 p-2  rounded-box'>
      <button className='btn btn-error' 
      >Leates News</button>
      <Marquee pauseOnHover={true} speed={80} >
       <div className='flex gap-7 text-black text-2xl'>
        {
          news.map((n)=>
          {
            return <span key={n.id}>{n.title}</span>
          })
       }
       </div>
      </Marquee>
    </div>
  )
}

export default breakingNews