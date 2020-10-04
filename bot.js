

  const textElement = document.getElementById('text')
  const optionButtonsElement = document.getElementById('option-buttons')
  
  let state = {}
  
  function startBot() {
    state = {}
    showTextNode(1)
  }
  
  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
  
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }
  
  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }
  
  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startBot()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }
  
  const textNodes = [
     {
      id: 1,
      text: 'Hi there, I am your advice bot, click on any option to begin!',
      options: [
        {
          text: 'Why is reducing bias important?',
          nextText: 2
        },
        {
          text: 'Can you tell us more about your pricing packages?',
          nextText: 3
        },
        {
            text: 'Where are you based and what are your contact details?',
            nextText: 4
        },
      ]
    },
    {
      id: 2,
      text: 'Bias in recruitment prevents equal job opportunity for all, our statistical page can give you further details',
      options: [
        {
          text: 'Thanks, tell me more about your pricing packages',
          nextText: 3
        },
        {
            text: 'Thanks, where are you based and what are your contact details?',
            nextText: 4
        },
        {
          text: 'Thanks, and return to start',
          nextText: -1
        }
      ]
    },
    {
      id: 3,
      text: 'We have three pricing options: Tier 1, Tier 2 and Tier 3, please see our pricing page for more info',
      options: [
        {
          text: 'Thanks, I would like more resources on reducing bias, please',
          nextText: 2
        },
        {
            text: 'Thanks, where are you based and what are your contact details?',
            nextText: 4
        },
        {
          text: 'Thanks, and return to start',
          nextText: -1
        }
      ]
    },
    {
        id: 4,
        text: 'We are based in London and you can send us an enquiry through our contact page',
        options: [
          {
            text: 'Thanks, I would like more resources on reducing bias, please',
            nextText: 2
          },
          {
            text: 'Thanks, tell me more about your pricing packages',
            nextText: 3
          },
          {
            text: 'Thanks, and return to start',
            nextText: -1
          }
        ]
      }
  ]
  
  startBot()
