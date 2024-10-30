export function Rodape(props){
  return (
    <div>
        <p>&copy; 2024 TechInclusão. Todos os direitos reservados.</p>
      <div>
        <a href={props.linkGithub} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={props.linkLinkedin}>LinkedIn</a>
        <a href={props.linkEmail}>Email</a>
      </div>
    </div>
  )
}
