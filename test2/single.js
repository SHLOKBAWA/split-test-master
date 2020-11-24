Survey
    .StylesManager
    .applyTheme("default");

var json = {
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
           "name": "question1",
           "title": "How many years of experience you have in java?",
           "choices": [
            {
             "value": "item1",
             "text": "Less than an year"
            },
            {
             "value": "item2",
             "text": "1-2 years"
            },
            {
             "value": "item3",
             "text": "More than 3 years"
            }
           ]
          },
       {
        "type": "comment",
           "name": "question2",
           "title": "How do you consider team work is important in this job?"
       }
      ]
     },

     /*--------*/


     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
           "name": "question2",
           "title": "Do you have experience working with any of the web server like Tomcat, JBoss etc?",
           "choices": [
            {
             "value": "item1",
             "text": "Yes"
            },
            {
             "value": "item2",
             "text": "No"
            }
           ]
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Do you have experience working with Eclipse, Netbeans or any other IDE?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       }
      ]
     },

     /*----------*/


     {
      "name": "page3",
      "elements": [
       {
        "type": "comment",
           "name": "question10",
           "title": "If you have worked in any other company please mention"
       },
       {
        "type": "radiogroup",
           "name": "question5",
           "title": "Are you willing to relocate?",
           "choices": [
            {
             "value": "item1",
             "text": "Yes"
            },
            {
             "value": "item2",
             "text": "No"
            }
        ]
       }
      ]
     },

     /*--------------*/


     {
      "name": "page4",
      "elements": [
       {
        "type": "radiogroup",
           "name": "question6",
           "title": "Are you familiar with unit testing JUnit?",
           "choices": [
            {
             "value": "item1",
             "text": "Yes"
            },
            {
             "value": "item2",
             "text": "No"
            }
           ]
          },
       {
        "type": "comment",
           "name": "question7",
           "title": "Why do you think you are fit for the job?"
       }
      ]
     },

     /*-----------*/

     
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "Do you visualize the relation between your work and the goal of our company?",
        "choices": [
         {
          "value": "item1",
          "text": "Till some extent"
         },
         {
          "value": "item2",
          "text": "May be"
         },
         {
          "value": "item3",
          "text": "Yes surely."
         }
        ]
       },
       {
        "type": "comment",
        "name": "question9",
        "title": "What do you look in your ideal job?"
       }
      ]
     }
    ]
   };

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });