import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {Team} from "./team";
import {catchError, tap, map} from "rxjs/operators";

@Injectable()
export class TeamService {
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }

  private teamUrl = 'api/teams';


  httpOption = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl)
      .pipe(
        tap(_ => this.log(`[${new Date().toLocaleString()}] system/ team.service.ts: 팀 목록이 업데이트되었습니다.`)),
        catchError(this.handleError<Team[]>('getTeams', []))
      )
  }

  searchTeam(term: string): Observable<Team[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Team[]>(`${this.teamUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`[${new Date().toLocaleString()}] system/ team.service.ts: "${term}" 님에 대한 검색을 실행했습니다.`) :
        this.log(`error: "${term}" 님에 대한 정보를 가져오지 못했습니다.`)),

      catchError(this.handleError<Team[]>('searchHero', []))
    );
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.teamUrl}/${id}`
    return this.http.get<Team>(url).pipe(
      tap(_ => this.log(`[${new Date().toLocaleString()}] system/ team.service.ts: id:${id}의 상세페이지 접근`)),
      catchError(this.handleError<Team>(`오류: id:${id}`))
    )
  }

  updateTeam(team: Team): Observable<any> {
    return this.http.put(this.teamUrl, team, this.httpOption)
      .pipe(
        tap(_ => this.log(`[${new Date().toLocaleString()}] system team.service.ts: ${team.name}님의 정보가 변경되었습니다.`)),
        catchError(this.handleError<any>('updateTeam'))
      )
  }

  addTeam(team: Team): Observable<any> {
    return this.http.post<Team>(this.teamUrl, team, this.httpOption)
      .pipe(
        tap((newTeam: Team) => this.log(`[${new Date().toLocaleString()}] system team.service.ts: "${newTeam.id}"님이 추가되었습니다.`)),
        catchError(this.handleError<Team>('error : 추가 실패'))
      )
  }
}
