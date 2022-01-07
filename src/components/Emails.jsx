import Email from "./Email"

function Emails (props){
    return( 
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email email={email} index={email.id} toggleRead={props.toggleRead} toggleStar={props.toggleStar} />
          ))}
        </ul>
      </main>
    
)}

export default Emails