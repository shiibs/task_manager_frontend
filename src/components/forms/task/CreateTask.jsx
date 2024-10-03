export default function CreateTask() {
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className=" bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-3xl w-full">
        <div className="w-full p-8 lg:w-1/2 mx-auto">
          <p className="text-2xl text-gray-600 text-center">Create Task</p>
          <div className="mt-5">
            <input
              className="text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 placeholder-gray-500"
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div className="mt-4 ">
            <input
              className="text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 placeholder-gray-500"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="mt-4">
            <select
              id="user"
              className="w-full px-5 py-3 bg-white rounded-lg border border-gray-300 focus:outline-2 text-gray-700  focus:border-none focus:outline-none focus:outline-blue-700 "
              required
            >
              <option selected>Assign member</option>
              <option value="Admin">user1</option>
              <option value="Member">user2</option>
            </select>
          </div>
          <div className="mt-4">
            <select
              id="user"
              className="w-full px-5 py-3 bg-white rounded-lg border border-gray-300 focus:outline-2 text-gray-700  focus:border-none focus:outline-none focus:outline-blue-700 "
              required
            >
              <option selected>Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          <div className="mt-4 ">
            <input
              className="text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 placeholder-gray-500"
              type="date"
              placeholder="Deadline"
            />
          </div>
          <div className="my-7">
            <button className="bg-blue-700 text-white font-bold py-3 px-4 w-full rounded hover:bg-blue-600">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
