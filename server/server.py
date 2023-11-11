import time
import pandas as pd
import csv
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
    age = request.form.get('Student Age')
    sex = request.form.get('Sex')
    hs = request.form.get('High School Type')
    schol = request.form.get('Scholarship Type')
    addlWork = request.form.get('Additional Work')
    activity = request.form.get('Extracurricular Type')
    partner = request.form.get('Relationship Status')
    salary = request.form.get('Salary')
    transport = request.form.get('Transportation Method')
    accomodation = request.form.get('Accomodation Type')
    med = request.form.get('Mother Education')
    fed = request.form.get('Father Education')
    sis = request.form.get('Number of Sisters')
    parent = request.form.get('Parental Status')
    moc = request.form.get('Mother Occupation')
    foc = request.form.get('Father Occupation')
    study = request.form.get('Weekly Study Hours')
    read = request.form.get('Reading Frequency')
    seminar = request.form.get('Attendance to Seminars')
    projects = request.form.get('Impact of Projects')
    attendance = request.form.get('Attendance to Classes')
    exam1 = request.form.get('Exam 1 Prep')
    exam2 = request.form.get('Exam 2 Prep')
    notes = request.form.get('Note Taking')
    listen = request.form.get('Listening in Class')
    discussion = request.form.get('Discussion Interest')
    lasSemGrade = request.form.get('Grade Last Semester')
    expectedGrade = request.form.get('Expected Graduation GPA')
    
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
                         
    dataFrame = pd.DataFrame(dataSet,columns=['age','sex','hs','schol','addlWork','activity','partner','salary','transport','accomodation','med','fed','sis','parent','moc','foc','study','read','seminar','projects','attendance','exam1','exam2','notes','listen','discussion','lastSemGrade','expectedGrade'],dtype=int)
    
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
    
    
    

if __name__ == "__main__":
    app.run(debug=True)