import { useState } from "react"
import { Navbar } from "../Navbar"
import './styles.css'


export const Phone = () => {
  const [idx, setIdx] = useState(0)
  return (
    <div className="mock-container">
      <div>
        <img
          src={mockImg[idx].img}
          alt=""
          className="bgimage active"
        />
      </div>
      <div className="mock-container--links">
        <Navbar callback={setIdx} btnActive={idx} />
      </div>
    </div>
  )
}

const mockImg = [
  {
    img: "https://picsum.photos/1024/768?random=1",
  },
  {
    img: "https://picsum.photos/1024/768?random=2",
  },
  {
    img: "https://picsum.photos/1024/768?random=3",
  },
  {
    img: "https://picsum.photos/1024/768?random=4",
  },
]