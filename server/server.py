import time
import pandas as pd
import csv
import json
from flask import Flask, request
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

def inRange(data, checkData, tolerance):
    if(checkData <= data+tolerance) and (checkData >= data-tolerance):
        return True
    else:
        return False

@app.route("/studentPageMetrics", methods=['POST'])
def student_page():
    age = request.form.get('Student Age') or 2
    sex = request.form.get('Sex') or 2
    hs = request.form.get('High School Type') or 2
    schol = request.form.get('Scholarship Type') or 2
    addlWork = request.form.get('Additional Work') or 2
    activity = request.form.get('Extracurricular Type') or 2
    partner = request.form.get('Relationship Status') or 2
    salary = request.form.get('Salary') or 2
    transport = request.form.get('Transportation Method') or 2
    accomodation = request.form.get('Accomodation Type') or 2
    med = request.form.get('Mother Education') or 2
    fed = request.form.get('Father Education') or 2
    sis = request.form.get('Number of Sisters') or 2
    parent = request.form.get('Parental Status') or 2
    moc = request.form.get('Mother Occupation') or 2
    foc = request.form.get('Father Occupation') or 2
    study = request.form.get('Weekly Study Hours') or 2
    read = request.form.get('Reading Frequency') or 2
    seminar = request.form.get('Attendance to Seminars') or 2
    projects = request.form.get('Impact of Projects') or 2
    attendance = request.form.get('Attendance to Classes') or 2
    exam1 = request.form.get('Exam 1 Prep') or 2
    exam2 = request.form.get('Exam 2 Prep') or 2
    notes = request.form.get('Note Taking') or 2
    listen = request.form.get('Listening in Class') or 2
    discussion = request.form.get('Discussion Interest') or 2
    lasSemGrade = request.form.get('Grade Last Semester') or 2
    expectedGrade = request.form.get('Expected Graduation GPA') or 2
    
    categories = ['age','sex','hs','schol','addlWork','activity','partner','salary','transport','accomodation','med','fed','sis','parent','moc','foc','study','read','seminar','projects','attendance','exam1','exam2','notes','listen','discussion','lastSemGrade','expectedGrade']

    dataFile = 'studentData.csv'
    dataSet = []

    with open(dataFile, newline='') as studentData:
        csv_reader = csv.DictReader(studentData)
        
        for row in csv_reader:
            ageItem = row['Student Age']
            sexItem = row['Sex']
            hsItem = row['Graduated high-school']
            scholItem = row['Scholarship type']
            addlWorkItem = row['Additional work']
            activityItem = row['Regular artistic or sports activity']
            partnerItem = row['Do you have a partner']
            salaryItem = row['Total salary if available']
            transportItem = row['Transportation to the university']
            accomodationItem = row['Accommodation type in Cyprus']
            medItem = row['Mothers education']
            fedItem = row['Fathers education']
            sisItem = row['Number of sisters/brothers']
            parentItem = row['Parental status']
            mocItem = row['Mothers occupation']
            focItem = row['Fathers occupation']
            studyItem = row['Weekly study hours']
            readItem = row['Reading frequency']
            seminarItem = row['Attendance to the seminars/conferences related to the department']
            projectsItem = row['Impact of your projects/activities on your success']
            attendanceItem = row['Attendance to classes']
            exam1Item = row['Preparation to midterm exams 1']
            exam2Item = row['Preparation to midterm exams 2']
            notesItem = row['Taking notes in classes']
            listenItem = row['Listening in classes']
            discussionItem = row['Discussion improves my interest and success in the course']
            lasSemGradeItem = row['Cumulative grade point average in the last semester (/4.00)']
            expectedGradeItem = row['Expected Cumulative grade point average in the graduation (/4.00)']
            
            if(inRange(age,ageItem,1) and (sexItem == sex) and inRange(hs,hsItem,1) and inRange(schol,scholItem,2) and (partner == partnerItem) and inRange(salary,salaryItem,1) and inRange(transport,transportItem,1) and inRange(accomodation,accomodationItem,1) and inRange(med,medItem,1) and inRange(fed,fedItem,1) and inRange(sis,sisItem,2) and (parent == parentItem) and inRange(moc,mocItem,2) and inRange(foc,focItem,2) and inRange(lasSemGrade,lasSemGradeItem,2)):
                dataSet.append([ageItem,sexItem,hsItem,scholItem,addlWorkItem,activityItem,partnerItem,salaryItem,transportItem,accomodationItem,medItem,fedItem,sisItem,parentItem,mocItem,focItem,studyItem,readItem,seminarItem,projectsItem,attendanceItem,exam1Item,exam2Item,notesItem,listenItem,discussionItem,lasSemGradeItem,expectedGradeItem])
                         
    dataFrame = pd.DataFrame(dataSet,columns=categories,dtype=int)
    
    #split the dataframe values to have all inputs and grade as output
    features = dataFrame.iloc[:,27]
    target = dataFrame['expectedGrade']
    
    #perform linear regression on inputs with respect to grade
    featuresTrain, featuresTest, targetTrain, targetTest = train_test_split(features, target, test_size=0.2)
    regressionModel = LinearRegression()
    regressionModel.fit(featuresTrain,targetTrain)
    
    #perform a test prediction to evaluate model error
    targetPrediction = regressionModel.predict(featuresTest)
    modelError = mean_squared_error(targetTest, targetPrediction)
    
    #extract the weights from the models coefficients
    weights = regressionModel.coef_
    
    #pair the weights with their category
    catAndWeight = []
    for weight, item in zip(weights, categories):
        catAndWeight.append([item,weight])
    
    #make a list containing only the ones that the student can change
    outputObjects = catAndWeight[4:6] + catAndWeight[16:19] + catAndWeight[20:25]
    outputObjects = sorted(outputObjects, key=lambda x: x[1])

    #create list of items student doesnt have maxed out
    couldChange = [addlWork, activity, study, read, seminar, attendance, exam1, exam2, notes, listen]
    couldChangeNames = ['addlWork','activity','study','read','seminar','attendance','exam1','exam2','notes','listen']
    checkValsDict = {'addlWork': 2, 'activity': 2, 'study': 4, 'read': 3, 'seminar': 2, 'attendance': 2, 'exam1': 2, 'exam2': 2, 'notes': 3, 'listen': 3}
    
    couldImprove = [name for name, value in zip(couldChangeNames, couldChange) if value <= checkValsDict[name]]
    sortedOutput = [sublist for sublist in outputObjects if sublist[0] in couldImprove]

    descriptions = {
    'addlWork': 'Take on additional work',
    'activity': 'Take part in an extracurricular activity',
    'study': 'Increase time studying',
    'read': 'Increase time reading material',
    'seminar': 'Attend seminars for the class',
    'attendance': 'Reduce absences in the class',
    'exam1': 'Prepare more for exam 1',
    'exam2': 'Prepare more for exam 2',
    'notes': 'Take more notes during class',
    'listen': 'Listen more in class'
    }
    
    converted_values = [descriptions[value] for value in sortedOutput]
    
    json_file_path = 'student_output.json'

    with open(json_file_path, 'w') as json_file:
        json.dump(converted_values, json_file)    
    

if __name__ == "__main__":
    app.run(debug=True)