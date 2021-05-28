

const bandMembers =[
    { image:'/theo1.jpg',
      name: 'bandmemberone',
      role: 'Guitar'
    },
    {
      image:'/theo2.jpg',
      name: 'bandmemberone',
      role: 'Guitar'
    },
    {
      image:'/theo3.jpg',
      name: 'Alex Angulo',
      role:'Drums/ Vocals'
    },
    {
      image:'/theo4.jpg',
      name: 'Mario Ramos',
      role: 'Bass Guitar'
    }
]  

function Band() {
    return (
        <section id="Members" className={styles.profileSection}>
        {bandMembers.map((members, index) => (
          <BandProfile key={index} image={members.image} name={members.name} role={members.role}/>
        ))}
      </section>
    )
}

export default Band
