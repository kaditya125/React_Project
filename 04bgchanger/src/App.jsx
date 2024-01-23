import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('green');

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
            <button onClick={() => { setColor("red") }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>
              Red
            </button>
            <button onClick={() => { setColor("green") }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>
              Green
            </button>
            <button onClick={() => { setColor("yellow") }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow" }}>
              Yellow
            </button>
            <button onClick={() => { setColor("orange") }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }}>
              Orange
            </button>
            <button onClick={() => { setColor("olive") }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "olive" }}>
              Olive
            </button>
            <button onClick={() => { setColor("blue") }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>
              Blue
            </button>
          </div>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quam nostrum consequuntur deserunt explicabo beatae odit obcaecati dolores pariatur porro. Deserunt eaque voluptatibus cum maxime rem, at optio, dolore, veritatis beatae cupiditate saepe asperiores. Adipisci deleniti voluptates voluptatum quam totam temporibus fugiat, ut quaerat perferendis velit aliquam. Voluptas in ratione consequuntur, doloribus adipisci non consectetur voluptatum? Ratione aut veniam sequi incidunt rerum perferendis molestiae consequatur autem, molestias id vitae maiores eveniet earum exercitationem? Aliquid voluptatem mollitia saepe voluptatum, accusantium laudantium, aperiam voluptatibus iste vero non sed unde dolor laborum eos voluptates dolores minus possimus itaque quae tenetur necessitatibus. Consequuntur temporibus consectetur ullam cupiditate in, deleniti hic, non adipisci aliquid ex, a magni possimus aperiam pariatur ad vel officiis corporis eos! Minus magnam quaerat rem magni odit, totam itaque, suscipit doloribus ullam sequi explicabo id eaque at voluptates? Amet voluptatibus, minus earum provident, vero eligendi recusandae minima ea iure nulla laborum.</p>
      </div>
    </>
  );
}

export default App;
