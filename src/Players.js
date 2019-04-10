const players = [
    {
        name: "Main Camera",
        team: 'None',
        video: '/assets/test-videos/Abstract - 20070-1.mp4'
    }, {
        name: 'Isaac Asimov', 
        team: 'Red',
        number: 1,
        position: 'Forward', 
        video: '/assets/test-videos/Abstract - 20070-2.mp4',
        goals: true,
        goalData: {
            numScored: 2,
            goalTimes: [4, 6] //Provide in seconds
        }
    }, 
    {
        name: 'William Gibson', 
        team: 'Blue',
        number: 2,
        position: 'Defender', 
        video: '/assets/test-videos/Abstract - 20070-3.mp4',
        goals: null
    }, 
    {
        name: 'J.G Ballard', 
        team: 'Blue',
        number: 1,
        position: 'Mid-field', 
        video: '/assets/test-videos/Abstract - 20070-4.mp4',
        goals: true,
        goalData: {
            numScored: 2,
            goalTimes: [8, 10] //Provide in seconds
        }
    }
]

export default players