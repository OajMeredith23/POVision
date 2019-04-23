const players = [
    {
        name: "Main Camera",
        team: 'None',
        video: '/assets/main-camera-small.mp4'
    }, {
        name: 'Isaac Asimov', 
        team: 'Blue',
        number: 1,
        position: 'Forward', 
        video: '/assets/1080p/Blue-team/Player-1.mp4',
        goals: true,
        goalData: {
            numScored: 2,
            goalTimes: [4, 6] //Provide in seconds
        }
    }, 
    {
        name: 'PKD', 
        team: 'Blue',
        number: 2,
        position: 'Forward', 
        video: '/assets/1080p/Blue-team/Player-2.mp4',
        goals: true,
        goalData: {
            numScored: 2,
            goalTimes: [4, 6] //Provide in seconds
        }
    },
    {
        name: 'Aldous Huxley', 
        team: 'Blue',
        number: 3,
        position: 'Forward', 
        video: '/assets/1080p/Blue-team/Player-3.mp4',
        goals: true,
        goalData: {
            numScored: 2,
            goalTimes: [4, 6] //Provide in seconds
        }
    },
    {
        name: 'George Orwell', 
        team: 'Red',
        number: 1,
        position: 'Forward', 
        video: '/assets/1080p/Red-team/Player-1-RedTeam.mp4',
        goals: true,
        goalData: {
            numScored: 2,
            goalTimes: [4, 6] //Provide in seconds
        }
    },
    {
        name: 'Margerat Atwood', 
        team: 'Red',
        number: 2,
        position: 'Forward', 
        video: '/assets/1080p/Red-team/Player-2-RedTeam.mp4',
        goals: true,
        goalData: {
            numScored: 2,
            goalTimes: [4, 6] //Provide in seconds
        }
    },
    {
        name: 'Isaac Asimov', 
        team: 'Red',
        number: 3,
        position: 'Forward', 
        video: '/assets/1080p/Red-team/Player-3-RedTeam.mp4',
        goals: true,
        goalData: {
            numScored: 2,
            goalTimes: [4, 6] //Provide in seconds
        }
    },
    {
        name: 'William Gibson', 
        team: 'Red',
        number: 4,
        position: 'Defender', 
        video: '/assets/1080p/Red-team/Player-4-RedTeam.mp4',
        goals: null
    }
]


export default players;

