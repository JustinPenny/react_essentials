import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';


function App() {
  //You may only call hooks inside of Component functions (App(), Header(), etc)
  // Hooks may only be called at the top level or scope, they may not be nested anywhere
  const [selectedTopic, setSelectedTopic] = useState();


  // we are passing a pointer to this function via the onClick prop to handle the state change in another component
  function handleClick(selectedButton){
      setSelectedTopic(selectedButton)
    }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => 
            <CoreConcept {...conceptItem} key={conceptItem.title}/> 
            )}
        </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (<p>Please select a topic.</p>) 
          : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

      </section>

      </main>
    </div>
  );
}

export default App;