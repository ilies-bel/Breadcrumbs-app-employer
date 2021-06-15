const results = [{
    first_name: "Raito",
    last_name: "Yagami",
    mail: "kira@interpol.com",
    profile_picture_id: 1
    },
    {
        first_name: "Misa",
        last_name: "Misa",
        mail: "misamisa@idol.com",
        profile_picture_id: 2
    },
    {
        first_name: "Nutella",
        last_name: "Thermos",
        mail: "nutella@ferrero.com",
        profile_picture_id: 3
    },
    {
        first_name: 'Jane Cooper',
        last_name: "Cooper",
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        mail: 'jane.cooper@example.com',
        profile_picture_id: 4,
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
]

export default (req, res) => {
    res.status(200).json(results)
  }
  