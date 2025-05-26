def summary(data):
    for student in data:
        scores = student['scores']
        total = sum(scores)
        avg = round(total / len(scores), 1)
        print(f"{student['name']} - 总分: {total}, 平均: {avg}")
