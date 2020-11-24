
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employment Assessment for Java Script",
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

          /*----*/

          {
             "name": "page2",
             "elements": [
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
               },
               {
                "type": "checkbox",
                "name": "question4",
                "title": "Do you have knowledge on the following UI component?",
                "choices": [
                 {
                  "value": "item1",
                  "text": "HTML 5"
                 },
                 {
                  "value": "item2",
                  "text": "Java Script"
                 },
                 {
                  "value": "item3",
                  "text": "CSS"
                 }
                ],
                "hasOther": true,
                "otherText": "JQuery"
               },
               /*----*/


               {
                "name": "page3",
                "elements": [
                 {
                  "type": "radiogroup",
                  "name": "question5",
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
                  "type": "radiogroup",
                  "name": "question6",
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


                 /*---*/


                 {
                    "name": "page4",
                    "elements": [
                     {
                      "type": "radiogroup",
                      "name": "question7",
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
                      "type": "radiogroup",
                      "name": "question8",
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


                     /*---*/


                     {
                        "name": "page5",
                        "elements": [
                         {
                          "type": "radiogroup",
                          "name": "question9",
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
                          "type": "radiogroup",
                          "name": "question10",
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
                         }
                        ]
                    
                
    

              
               

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });