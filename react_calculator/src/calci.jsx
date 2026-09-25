function Calci({
  number,
  setNumber,
  handleDelete,
  handleClick,
  handleClear,
  handleOperator,
  handleCalculate,
}) {
  return (
    <>
      <div className="w-full h-screen bg-gray-600 flex justify-center items-center">
        <div className="w-72 bg-cyan-900 h-96 rounded-xl text-center p-2 shadow-xl">
          <div className="w-full h-auto">
            <input
              className="w-full py-2 text-right text-white px-2 bg-gray-800 rounded-md outline-none text-4xl"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="0"
              readOnly
            />

            <div className="flex p-2 gap-3 grid grid-cols-4">
              <button
                onClick={handleClear}
                className="w-12 h-12 text-amber-500 bg-gray-900 rounded-full shadow-xl text-xl font-bold"
              >
                AC
              </button>
              <button
                onClick={handleDelete}
                className="w-12 h-12 text-amber-500 bg-gray-900 rounded-full shadow-xl text-xl font-bold"
              >
                DEL
              </button>
              <button
                onClick={() => handleOperator("/")}
                className="w-12 h-12 text-amber-500 bg-gray-900 rounded-full shadow-xl text-xl font-bold"
              >
                /
              </button>
              <button
                onClick={() => handleOperator("*")}
                className="w-12 h-12 text-amber-500 bg-gray-900 rounded-full shadow-xl text-xl font-bold"
              >
                *
              </button>
              <button
                onClick={() => handleClick("9")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                9
              </button>
              <button
                onClick={() => handleClick("8")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                8
              </button>
              <button
                onClick={() => handleClick("7")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                7
              </button>
              <button
                onClick={() => handleOperator("-")}
                className="w-12 h-12 text-amber-500 bg-gray-900 rounded-full shadow-xl text-xl font-bold"
              >
                -
              </button>
              <button
                onClick={() => handleClick("4")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                4
              </button>
              <button
                onClick={() => handleClick("5")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                5
              </button>
              <button
                onClick={() => handleClick("6")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                6
              </button>
              <button
                onClick={() => handleOperator("+")}
                className="w-12 h-12 text-amber-500 bg-gray-900 rounded-full shadow-xl text-xl font-bold"
              >
                +
              </button>
              <button
                onClick={() => handleClick("1")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                1
              </button>
              <button
                onClick={() => handleClick("2")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                2
              </button>
              <button
                onClick={() => handleClick("3")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                3
              </button>
              <button
                onClick={() => handleOperator(".")}
                className="w-12 h-12 text-amber-500 bg-gray-900 rounded-full shadow-xl text-xl font-bold"
              >
                .
              </button>

              <button
                onClick={() => handleClick("0")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                0
              </button>
              <button
                onClick={() => handleClick("00")}
                className="w-12 h-12 bg-gray-900 rounded-full shadow-xl text-xl text-white"
              >
                00
              </button>
              <button
                onClick={handleCalculate}
                className="w-32 h-12 cols-span-2 text-amber-500 bg-gray-900 rounded-full shadow-xl text-xl font-bold"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calci;
