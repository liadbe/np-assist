import { useState } from "react";
import { 
  Button, 
  IconButton, 
  Input, 
  Typography, 
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const listA = [
  'תוף','וילון','פעמון','קפה','בית ספר','הורה','ירח','גן','כובע','חקלאי','אף','תרנגול','צבע','בית ספר','נהר'
];

const listB = [
  'שולחן','שומר','ציפור','נעל','תנור','הר','משקפיים','מגבת','ענן','סירה','טלה','רובה','עיפרון','בית כנסת','דג'
];

const tabsHeader = [
  { value: 'listA', label: 'רשימה א', disabled: true }, 
  { value: 0, label: 'T1', desc: 'List A' }, 
  { value: 1, label: 'T2', desc: 'List A' }, 
  { value: 2, label: 'T3', desc: 'List A' }, 
  { value: 3, label: 'T4', desc: 'List A' }, 
  { value: 4, label: 'T5', desc: 'List A' }, 
  { value: 'listB', label: 'רשימה ב', desc: 'List A', disabled: true }, 
  { value: 5, label: 'T6', desc: 'List B' }, 
  { value: 6, label: 'T7', desc: 'List A; 20min' }, 
];

const Ravlt: React.FC = () => {
  const [currentTrial, setCurrentTrial] = useState(0);
  const [penetrations, setPenetrations] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  const [trials, setTrials] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const modifyWordCount = (trialIndex: number, wordIndex: number, isPlus: boolean) => {
    const clonedTrials = trials.slice();
    const prevValue = trials[trialIndex][wordIndex];
    clonedTrials[trialIndex].splice(wordIndex, 1, isPlus ? prevValue + 1 : (prevValue > 0 ? prevValue - 1 : 0));
    setTrials(clonedTrials);
  }

  const modifyPenetrations = (trialIndex: number, isPlus: boolean) => {
    const clonedPenetrations = penetrations.slice();
    const prevValue = penetrations[trialIndex];
    clonedPenetrations.splice(trialIndex, 1, isPlus ? prevValue + 1 : (prevValue > 0 ? prevValue - 1 : 0));
    setPenetrations(clonedPenetrations);
  }

  return (
    <div className='px-10 py-5' dir='rtl'>
      {/* <Tabs value={currentTrial}>
        <TabsHeader>
          {tabsHeader.map(({ label, value, disabled }) => (
            <Tab key={value} value={value} disabled={disabled}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs> */}
        
        {/* <TabsBody> */}
          
          {/* {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))} */}
      <div className="flex gap-4">
        {tabsHeader.map(({ label, value, disabled }) => {
          if (label.startsWith('T')) {
            return (
              <div key={value} className="flex-1 flex flex-col gap-2">
                <Button 
                  variant={currentTrial === value ? 'filled' : 'text'} 
                  onClick={() => setCurrentTrial(value)} 
                  className='px-4'
                >{label}</Button>

                {trials[currentTrial].map((item, wordIndex) => (
                  <div key={wordIndex} className='flex items-center justify-center gap-2'>                    
                    {value == currentTrial &&
                      <IconButton variant='outlined' onClick={() => modifyWordCount(currentTrial, wordIndex, true)}>
                        <i className="fas fa-plus" />
                      </IconButton>
                    }
                    
                    <div className='w-10'>
                      <Input disabled className='w-10 min-w-0 max-w-[40px] text-center' value={item} />
                    </div>

                    {value == currentTrial &&
                      <IconButton variant='outlined' onClick={() => modifyWordCount(currentTrial, wordIndex, false)}>
                        <i className="fas fa-minus" />
                      </IconButton>
                    }
                  </div>
                ))}

                <div className={value !== currentTrial ? 'hidden' : 'flex flex-col gap-2'}>
                  <hr className="my-2" />
                  
                  <div className="flex gap-2 items-center">
                    <Typography className='flex-1'>מילים נכונות</Typography>
                    <div className='w-10'>
                      <Input disabled className='min-w-0 max-w-[40px] text-center' value={trials[currentTrial].reduce((accumulator, currentValue) => currentValue > 0 ? accumulator + 1 : accumulator, 0)} />
                    </div>
                  </div>
                  
                  <div className="flex gap-2 items-center">
                    <Typography className='flex-1'>חזרות</Typography>
                    <div className='w-10'>
                      <Input disabled className='min-w-0 max-w-[40px] text-center' value={trials[currentTrial].reduce((accumulator, currentValue) => currentValue > 1 ? accumulator + (currentValue - 1) : accumulator, 0)} />
                    </div>
                  </div>
                  
                </div>

                {/* <div className="flex gap-2 items-center">
                  <Typography className='text-lg flex-1'>חדירות</Typography>
                  
                  <IconButton 
                    variant='outlined' 
                    onClick={() => modifyPenetrations(currentTrial, true)}
                  >
                      <i className="fas fa-plus" />
                  </IconButton>

                  
                  <div className='w-12'>
                    <Input disabled className='min-w-0 max-w-[48px] text-center' value={penetrations[currentTrial]} />
                  </div>
                  
                  <IconButton 
                    variant='outlined'
                    onClick={() => modifyPenetrations(currentTrial, false)}
                  >
                    <i className="fas fa-minus" />
                  </IconButton>
                </div> */}
              </div>
                        
            )
          } else {
            // return trials[currentTrial].map((item, wordIndex) => 
            //   <Typography className='text-lg flex-1'>{listA[wordIndex]}</Typography>
            // )
            return (
              <div key={value} className='flex-1'>
                <div className="flex flex-col gap-2 justify-center">
                  <Typography className='font-bold leading-10 whitespace-nowrap'>{label}</Typography>

                  {trials[currentTrial].map((item, wordIndex) =>
                    <Typography className='flex-1 whitespace-nowrap leading-10'>{listA[wordIndex]}</Typography>
                  )}
                </div>
              </div>
            );
          }
        })}
        </div>
        {/* </TabsBody> */}
      
    </div>
  );
}

export default Ravlt;
