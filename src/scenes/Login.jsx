export default function Login({setUser}) {
    return (
        <section style={{background: '#ff000030'}}>
            <h1>Login</h1>
            <button onClick={() => setUser('Returning user')}>Login</button>
        </section>
    )
}