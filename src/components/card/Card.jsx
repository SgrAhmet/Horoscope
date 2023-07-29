import './card.scss';


const Card = ({data}) => {
        
       
       
  return (
    <>
        
        {data.map((i)=>{
                return(<div key={i.id} className="cardDiv">
                <h1 className='name'>{i.name}({i.symbol})</h1>
                <p className="date">{i.date}</p>
                <img src={i.img} alt="" />

          
                <div className="detailDiv">
                        <p className="detail">{i.detail}</p>
                </div>
        </div>)
        })}


        
      
        {/* <div className="cardDiv">
                <h1 className='name'>Ram(♈︎)</h1>
                <p className="date">21 March - 20 April</p>
                <img src="https://www.liveabout.com/thmb/qicTyVpSrmKxcucWtc-vyXES-58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ariesram1-56c361a75f9b5829f86c9f13.jpg" alt="" />

          
                <div className="detailDiv">
                        <p className="detail">Feeling that an aba woven from the dense wools of Aries revives one's hopes, and people of this sign quickly recover after the relationships they live in their dreams. In fact, behind the excited looks of the seven coaches, there is a shy disposition to share everything they have with others. Wool obtained from ram takes on many guises in skillful hands. It becomes a thread, it is woven, it becomes countless clothes. This is so important that even the passenger Athena could not accept the challenge. There is hardly a nation in the world who does not want to have the secret of these crafts. Those who are best at all these jobs are those born under the sign of Aries</p>
                </div>
        </div> */}
      
        
    </>
  )
}

export default Card