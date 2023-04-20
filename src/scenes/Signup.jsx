export default function Signup({setUser}) {
    return (
        <section style={{background: '#ffff0030'}}>
            <h1>Sign Up</h1>
            <button onClick={() => setUser('Returning user')}>Sign Up</button>
        </section>
    )
}