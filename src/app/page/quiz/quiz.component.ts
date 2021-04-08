import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Question } from 'src/app/model/question';
import { Quiz } from 'src/app/model/quiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  question: Question = new Question();

  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.questionService.getAll();
  }

  questionIdArray: number[] = [];
  questionListLength: number = 0;
  questionList: Question[] = [];
  currentPosition: number = 0;
  quizId: number = 0;

  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap( params => {

      if (Number(params.id) === 0) {
        return of(new Quiz());
      }
      return this.quizService.get(Number(params.id)).pipe(
        tap(
          item => {
            this.quizId = params.id;
            this.questionIdArray = item.questions;
            this.questionListLength = item.questions.length;
            item.questions.forEach(element => {
              this.questionService.get(element).subscribe(
                data => {
                  this.questionList.push(data);
                })
            })
          }
        )
      );

    })
  );
}
