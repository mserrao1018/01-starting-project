import { EXAMPLES } from "../../assets/data-with-examples";
import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import Section from "../Section";
import Tabs from "../TabButton/Tabs";

export default function Examples(){
    let [selectedTopic, setSelectedTopic] = useState('components');

    function handleSelect(selectedButton) {
        console.log('Selected button', selectedButton);
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please Select a Topic</p>;
    if(selectedTopic){
      tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    }

    return(
          <Section id="examples" title="Examples">
            <Tabs buttonsContainer="menu" buttons={<>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => { handleSelect('components') }}> Component </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => { handleSelect('jsx') }}> JSX </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => { handleSelect('props') }}> Props </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => { handleSelect('state') }}> State </TabButton>
            </>}>
              {tabContent}
            </Tabs>
        </Section>
    )
}