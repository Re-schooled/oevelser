export default function Assignment({ id, children }) {
    function makeTitle() {
        return `Opgave ${id.replace("-", " ")}`
    }
    return <section id={id}>
        <h2>{makeTitle()}</h2>
        {children}
    </section>;
}
