import './Adds.scss';

const Adds = () => {

    const date = new Date();
    const today = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    
  return (
    <section className='adds__section'>
        <div className="adds">
          <h3>Սահակյան Արամայիս Վարդանի</h3>
          <span>{today}/{month}/{year}</span>
          <p>{`Տրված են a և b (a < b) բնական թվերը։ Ստանալ և տպել վեկտոր, որի տարրերը լինեն [a, b] միջակայքի պարզ, այնուհետև բաղադրյալ թվերը։`}</p>
        </div>
    </section>  
  )
}

export default Adds
