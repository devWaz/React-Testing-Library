const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: 'waz',
                    last: 'pluto'
                },
                picture: {
                    large: 'https://randomuser.me/api/portraits/men/39.jpg'
                },
                login: {
                    username: 'thegxd'
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}