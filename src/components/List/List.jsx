

export default function List({ data }) {


  return (
    <ul>
      {data.map((item, index) => (
      
          <li key={index}>{item}</li>
         
     
      ))}
    </ul>
  );
}
