import React from 'react'

export default function Home() {
    return (
     <section class="w-full max-w-4xl mx-auto py-10 px-6 bg-white shadow-lg rounded-lg">
  <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">19 React Projects</h2>
  <p class="text-lg text-gray-600 text-center mb-8">
    Throughout the process of building these 19 React projects, I gained valuable experience in several key areas of React development:
  </p>
  <ul class="space-y-4">
    <li class="flex items-start space-x-2">
      <span class="text-xl text-blue-500">✔️</span>
      <p class="text-gray-700"><strong>useState Hook</strong>: Mastered managing component state using the <code class="bg-gray-100 px-1 rounded text-sm">useState</code> hook to efficiently trigger re-renders and update the UI based on state changes.</p>
    </li>
    <li class="flex items-start space-x-2">
      <span class="text-xl text-blue-500">✔️</span>
      <p class="text-gray-700"><strong>useEffect Hook</strong>: Leveraged the <code class="bg-gray-100 px-1 rounded text-sm">useEffect</code> hook to fetch data from APIs and dynamically render responses in the UI, handling side effects in functional components.</p>
    </li>
    <li class="flex items-start space-x-2">
      <span class="text-xl text-blue-500">✔️</span>
      <p class="text-gray-700"><strong>Custom Hooks</strong>: Applied the DRY (Don't Repeat Yourself) principle to create reusable custom hooks, such as <code class="bg-gray-100 px-1 rounded text-sm">useFetch</code>, <code class="bg-gray-100 px-1 rounded text-sm">useLocalStorage</code>, and <code class="bg-gray-100 px-1 rounded text-sm">useOutsideClick</code>, to streamline code and improve maintainability.</p>
    </li>
    <li class="flex items-start space-x-2">
      <span class="text-xl text-blue-500">✔️</span>
      <p class="text-gray-700"><strong>React Icons</strong>: Integrated the <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener" class="text-blue-600 hover:underline">React-icons</a> library to seamlessly add icons to the UI, enhancing the app's user interface with minimal effort.</p>
    </li>
    <li class="flex items-start space-x-2">
      <span class="text-xl text-blue-500">✔️</span>
      <p class="text-gray-700"><strong>React Loader Spinner</strong>: Incorporated prebuilt loaders using the <a href="https://www.npmjs.com/package/react-loader-spinner" target="_blank" rel="noopener" class="text-blue-600 hover:underline">react-loader-spinner</a> library, providing a smooth loading experience while fetching or processing data.</p>
    </li>
    <li class="flex items-start space-x-2">
      <span class="text-xl text-blue-500">✔️</span>
      <p class="text-gray-700"><strong>React Router</strong>: Implemented <a href="https://reactrouter.com/" target="_blank" rel="noopener" class="text-blue-600 hover:underline">react-router-dom</a> for efficient routing and navigation in single-page applications (SPA), ensuring a seamless user experience across different views.</p>
    </li>
    <li class="flex items-start space-x-2">
      <span class="text-xl text-blue-500">✔️</span>
      <p class="text-gray-700"><strong>Global State Management</strong>: Integrated complex state management solutions like <a href="https://redux.js.org/" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Redux</a> for projects that required more advanced global state management, optimizing scalability and performance.</p>
    </li>
  </ul>
</section>
    )
}
