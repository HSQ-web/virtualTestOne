import "./style.css";
import VList from "./components/vlist";
import VlistItem from "./components/vlist-item";
import faker from "faker";

let data = [];
for (let id = 0; id < 100; id++) {
  const item = {
    id,
    value: faker.lorem.paragraphs() // 长文本
  };

  if (id % 10 === 1) {
    item.src = faker.image.image();
  }
  data.push(item);
}

export default function App() {
  return (
      <div className="App">
        <VList list={data}>
          {({ index, item, measure }) => (
              <VlistItem
                  index={index}
                  key={item.id}
                  item={item}
                  measure={measure}
              >
                <>
                  {item.value}
                  {item.src && <img src={item.src} alt="" />}
                </>
              </VlistItem>
          )}
        </VList>
      </div>
  );
}
