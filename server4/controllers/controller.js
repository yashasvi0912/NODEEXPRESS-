let person = [
    {name:"person1",phone: 1293},
    {name:"person2",phone: 1234},
    {name:"person3",phone: 1253},
    {name:"person4",phone: 1623},
    {name:"person5",phone: 1823},
]

let getHome = (req, res) => {
    // res.status(200).send("welcome to home page")
    // res.status(200).sendFile("index.html")
    res.status(200).render("index", { data: "hello 123", data2: true, data3: person, kuch: "kuch bhi" })
}

let getAbout = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("about")
}

let postSubmitForm = (req, res) => {
    // console.log(req)
    console.log(req.body)
    // if we are recieving form data it is always inside of req.body
    res.status(301).redirect("/")
}

export { getHome, getAbout, postSubmitForm }