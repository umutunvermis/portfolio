import './projects.scss'


export default function Projects({id, title, active, setSelected}) {
  return (
  <li className={active ? "projects active" :  "projects"}
  onClick={() => setSelected(id)}>
    {title}
  </li>

  );
}
