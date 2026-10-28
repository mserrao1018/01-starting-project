import { EXAMPLES } from "../../assets/data-with-examples";
import TabButton from "../TabButton/TabButton";
import { useState } from "react";

export default function Examples(){
    let [selectedTopic, setSelectedTopic] = useState('components');

    function handleSelect(selectedButton) {
        console.log('Selected button', selectedButton);
        setSelectedTopic(selectedButton);
    }

    return(
          <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => { handleSelect('components') }}> Component </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => { handleSelect('jsx') }}> JSX </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => { handleSelect('props') }}> Props </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => { handleSelect('state') }}> State </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
    )
}