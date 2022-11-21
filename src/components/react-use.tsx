import React, { useEffect } from 'react'
import { useBeforeUnload, useToggle } from 'react-use';

export default function ReactUse() {
  // const scrollRef = React.useRef(null);
  // const scrolling = useScrolling(scrollRef);
  // const { x, y } = useScroll(scrollRef);
  // const [data, setData] = useState<number[]>([])
  const [dirty, toggleDirty] = useToggle(false);
  useBeforeUnload(dirty, 'You have unsaved changes, are you sure?');


  useEffect(() => {
    // let _data = [];
    // for (let index = 0; index < 100; index++) {
    //   _data.push(index)
    // }
    // setData(_data)
  }, [])

  return (
    <>
      {/* <div>x: {x}</div>
      <div>y: {y}</div>
      <div>{scrolling ? "Scrolling" : "Not scrolling"}</div>
      <div style={{ height: 1000, backgroundColor: '#eee', overflowY: 'scroll' }} ref={scrollRef}>
        {
          data.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </div> */}
       <div>
        {dirty && <p>Try to reload or close tab</p>}
        <button onClick={() => toggleDirty()}>{dirty ? 'Disable' : 'Enable'}</button>
      </div>
    </>
  );
}
