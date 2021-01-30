export const questions = {
  questions: [
    {
      question: 'Which image best matches your hair loss?',
      type: 'ChoiceType',
      options: [
        {
          '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />': 'Temples',
        },
        {
          '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402x.png 2x"/>': 'Temples & Crown',
        },
        {
          '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>': 'Patchy',
        },
        {
          '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.png 2x" />': 'Moderate',
        },
        {
          '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.png 2x"/>': 'Extensive',
        },
        {
          '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x" />': 'Complete',
        },
      ],
    },
    {
      question: 'Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?',
      type: 'ChoiceType',
      options: [
        {
          Yes: true,
        },
        {
          No: false,
        },
      ],
    },
    {
      question: 'Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?',
      type: 'ChoiceType',
      options: [
        {
          Yes: true,
        },
        {
          No: false,
        },
      ],
    },
  ],
};
