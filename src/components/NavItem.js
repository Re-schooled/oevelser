export default function NavItem({name}) {
    return (
        <li>
            <a href={`#${name}`}>{name}</a>
        </li>
    );
}
