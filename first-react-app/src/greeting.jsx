function Greeting({name = 'World',children}) {

    return (
        <div className="Greeting Text">
            Hello {name}
            {children}
        </div>
    )
}

export default Greeting;