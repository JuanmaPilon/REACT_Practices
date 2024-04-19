import TwitterFollowCard from "./TwitterFollowCard";

function App () {
    const formattedUserName = (UserName) => `@${UserName}`

    return (
    <section className="App">
        <TwitterFollowCard 
        formattedUserName={formattedUserName} 
        isFollowing 
        UserName="Azzaio"
        name={"Juanma"}/>
        <TwitterFollowCard formattedUserName={formattedUserName} isFollowing={false} UserName="Carlangas" name="Carlos"/>
        <TwitterFollowCard formattedUserName={formattedUserName} isFollowing UserName="Myllie" name="Caro"/>
        <TwitterFollowCard formattedUserName={formattedUserName} isFollowing UserName="Cloomer" name="Eze"/>
    </section>
    )
}

export default App;