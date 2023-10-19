import { FC, DragEvent, useState } from 'react';

const Lesson3Page: FC = () => {
  const [drag, setDrag] = useState<boolean>(false);

  function dragStartHandler(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setDrag(true);
  }
  function dragLeaveHandler(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setDrag(false);
  }
  function onDropHandler(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(files);
    // const formData = new FormData()
    // formData.append('file', files[0])

    setDrag(false);
  }

  return (
    <div className="container">
      {drag ? (
        <div
          className="drop-area"
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          Отпустите файл, чтобы началась загрузка
        </div>
      ) : (
        <div
          className="drop-area"
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          Перетащите ваш файл в эту область
        </div>
      )}
    </div>
  );
};

export default Lesson3Page;
